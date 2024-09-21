import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.json({
		data: "data",
	});
});

export default app;
