import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL and Key are missing! Check your environment variables.')
}

export const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : {
        from: () => ({
            select: () => ({
                order: () => Promise.resolve({ data: [], error: null }),
                insert: () => Promise.resolve({ error: new Error('Supabase not configured') }),
                update: () => Promise.resolve({ error: new Error('Supabase not configured') }),
                delete: () => Promise.resolve({ error: new Error('Supabase not configured') })
            })
        })
    };
