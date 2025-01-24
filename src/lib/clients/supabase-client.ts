import { createClient } from "@supabase/supabase-js";
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const URL = import.meta.env.VITE_SUPABASE_PUB_URL;

export const supabase = createClient(URL, KEY);
