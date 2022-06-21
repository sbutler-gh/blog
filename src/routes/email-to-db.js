import supabase from '$lib/db';

export async function post({ request }) {

  const body = await await request.json();

  console.log('submitting json');
  console.log(request);

  console.log(body);

  const { data, error } = await supabase
  .from('mailersend_test')
  .insert([
    { 
      data: 'test 1'
        }
    ]);
    

  if (error) {
    return {
      status: error.status,
      body: error.message
    }
  }

  else {

  return {
    status: 200,
    body: data
  }
}
}