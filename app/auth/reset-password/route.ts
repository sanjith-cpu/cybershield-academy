import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";

function getSafeConfirmationUrl(value: string) {
  try {
    const url = new URL(value);

    const isSupabaseUrl =
      url.protocol === "https:" &&
      url.hostname.endsWith(".supabase.co") &&
      url.pathname === "/auth/v1/verify";

    if (!isSupabaseUrl) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const confirmationUrl = searchParams.get("confirmation_url");

  if (confirmationUrl) {
    const safeConfirmationUrl = getSafeConfirmationUrl(confirmationUrl);

    if (!safeConfirmationUrl) {
      return NextResponse.redirect(
        new URL("/forgot-password?error=invalid_reset_link", origin)
      );
    }

    const escapedConfirmationUrl = escapeHtml(safeConfirmationUrl);

    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Continue Password Reset | CyberShield Academy</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: #020817;
      color: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
    }

    .card {
      width: 100%;
      max-width: 560px;
      padding: 40px;
      border: 1px solid #1e293b;
      border-radius: 18px;
      background: #0f172a;
      text-align: center;
    }

    .brand {
      margin-bottom: 20px;
      color: #22d3ee;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.28em;
    }

    h1 {
      margin: 0 0 14px;
      font-size: 32px;
    }

    p {
      margin: 0 0 28px;
      color: #94a3b8;
      line-height: 1.6;
    }

    a {
      display: inline-block;
      width: 100%;
      padding: 15px 20px;
      border-radius: 12px;
      background: #22d3ee;
      color: #020817;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <main class="card">
    <div class="brand">CYBERSHIELD ACADEMY</div>
    <h1>Continue password reset</h1>
    <p>
      Click the button below to verify your password reset request and choose
      a new password.
    </p>

    <a
      href="${escapedConfirmationUrl}"
      rel="noreferrer noopener"
    >
      Continue to Reset Password
    </a>
  </main>
</body>
</html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(
        new URL("/update-password", origin)
      );
    }
  }

  return NextResponse.redirect(
    new URL(
      "/forgot-password?error=reset_failed",
      origin
    )
  );
}