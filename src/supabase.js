
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://spddfqorsaxzjfxeoncj.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZGRmcW9yc2F4empmeGVvbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MzU3MDUsImV4cCI6MjA0MzExMTcwNX0.6mMIZL7OXDTl7aPf6WlM7ojPQ_zRNrdoCouqV0dVppc';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
