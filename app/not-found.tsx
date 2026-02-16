import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Not found</h1>
        <p className="muted">That project doesn’t exist yet.</p>
        <Link className="btn btn-primary" href="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}