const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// schemas
const horizonSchema = [
    { attribute: 'account_creation_time', type: 'string' }
];

const nestSchema = [
    { attribute: 'account_creation_time', type: 'unix_epoch' }
];

function convert(value, fromType, toType) {
    if (fromType === toType) return value;

    if (fromType === 'string' && toType === 'unix_epoch') {
        return Math.floor(new Date(value).getTime() / 1000);
    }

    if (fromType === 'unix_epoch' && toType === 'string') {
        return new Date(value * 1000).toISOString();
    }

    return value; // fallback if unknown
}


function inferType(value) {
    if (typeof value === 'string' && !isNaN(Date.parse(value))) return 'string';
    if (typeof value === 'number') return 'unix_epoch';
    return typeof value;
}

// Generic mapper function
function mapFields(input, targetSchema) {
    const output = {};

    for (const field of targetSchema) {
        const { attribute, type: targetType } = field;
        const value = input[attribute];

        if (value === undefined) continue;

        const sourceType = inferType(value);
        output[attribute] = convert(value, sourceType, targetType);
    }

    return output;
}

// Endpoint: Convert to Nest
app.post('/sync-to-nest', (req, res) => {
    const mapped = mapFields(req.body, nestSchema);
    res.json(mapped);
});

// Endpoint: Convert to Horizon
app.post('/sync-to-horizon', (req, res) => {
    const mapped = mapFields(req.body, horizonSchema);
    res.json(mapped);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
