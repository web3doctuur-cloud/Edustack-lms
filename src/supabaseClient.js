import { createClient } from '@supabase/supabase-js'

// Copy/Paste your actual values between the quotes below
const supabaseUrl = 'https://vikvweketylmdnwdezyx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpa3Z3ZWtldHlsbWRud2Rlenl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTYyNTYsImV4cCI6MjA5MTA3MjI1Nn0.CHFdSwKJbutjz4gDuka3kinmXV9s2U_MMIE0f2kDOSQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)