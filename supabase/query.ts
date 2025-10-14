import { supabase } from '@/supabase/client';

export async function getPosts() {
  const { data, error } = await supabase.from('Posts').select('*');
  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data;
}

export async function getComments() {
  const { data, error } = await supabase
  .from('Comments')
  .select('*')
  if (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
  return data;
}