import { supabase } from "$lib/clients/supabase-client";

export async function load() {
  const { data } = await supabase.from("becute-services").select();
  return {
    services: data ?? [],
  };
}
