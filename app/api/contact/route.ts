export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string; // honeypot
    };

    // Honeypot: if filled, treat as bot
    if (body.website && body.website.trim().length > 0) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, message: "Missing fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@") || email.length < 6) {
      return Response.json(
        { ok: false, message: "Invalid email." },
        { status: 400 }
      );
    }

    // For now: server-side placeholder. Later you’ll integrate email provider here.
    // eslint-disable-next-line no-console
    console.log("[CONTACT]", { name, email, message });

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}