import { Hono } from "hono";

const app = new Hono();

app.notFound((c) => c.json({ message: "Not found", ok: false }, 404));

app.get("/", (c) => {
	return c.json({
		data: "data",
	});
});

export default app;
