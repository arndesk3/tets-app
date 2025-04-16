// index.js
const express = require("express");
const { promises: dns } = require("dns");

const app = express();

app.get("/", (req, res) => {
	res.send("✅ Fly.io Test App Working!");
});

app.get("/lookup", async (req, res) => {
	const domain = req.query.domain;
	if (!domain) return res.status(400).send({ error: "Missing ?domain=" });

	try {
		const mx = await dns.resolveMx(domain);
		res.send({ mx });
	} catch (e) {
		res.status(500).send({ error: e.message });
	}
});

app.listen(3000, () => console.log("App running on port 3000"));
