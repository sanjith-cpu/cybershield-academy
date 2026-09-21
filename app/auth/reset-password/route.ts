import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    const { error } =
      await supabase.auth.exchangeCodeForSession(code);

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