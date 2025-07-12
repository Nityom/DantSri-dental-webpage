 import { createClient } from "@supabase/supabase-js";

 const SUPABASE_URL = "https://kbivtshdqzhqgjupsqgo.supabase.co";
 const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiaXZ0c2hkcXpocWdqdXBzcWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTU4OTksImV4cCI6MjA1NDU5MTg5OX0.G__h7kYQZdGC9Sfu55dkNhGGqP6_Gr_pdxDpkadLDxc";

  export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
