import { createServerClient } from '../../utils/supabase/server';

export default async function Contacto() {
  const supabase = createServerClient();

  const { data, error } = await supabase.from('contacto').select();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

