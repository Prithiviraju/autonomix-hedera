require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client, TransferTransaction, Hbar } = require('@hashgraph/sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Hedera Testnet Client (Mock for Demo)
console.log("Initializing Hedera Client...");

// AI Agent Negotiation Endpoint
app.post('/api/negotiate', async (req, res) => {
    const { agentId, task, offerPrice } = req.body;
    console.log(`[Agent ${agentId}] Negotiating task: ${task} for ${offerPrice} HBAR`);

    // Simulate AI decision making logic
    const accepted = offerPrice >= 0.05;

    if (accepted) {
        res.json({ status: 'agreed', message: 'Price accepted. Proceeding to Hedera Escrow.' });
    } else {
        res.json({ status: 'rejected', message: 'Offer too low. Counter-offer: 0.05 HBAR' });
    }
});

// Hedera Micro-transaction Execution Endpoint
app.post('/api/execute-payment', async (req, res) => {
    console.log("Executing Hedera Micro-transaction via HTS...");
    
    // Simulate transaction delay
    setTimeout(() => {
        res.json({
            success: true,
            transactionId: `0.0.12345@${Date.now()}.000000000`,
            networkFee: "$0.0001",
            status: "SUCCESS"
        });
    }, 1500);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🤖 Autonomix Agent Node running on port ${PORT}`));
