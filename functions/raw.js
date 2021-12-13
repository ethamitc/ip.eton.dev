export async function onRequest({ request }) {
  const resp = {
    ip: request.headers.get('CF-Connecting-IP'),
    asn: Number(request.cf.asn),
    coordinates: {
      latitude: Number(request.cf.latitude),
      longitude: Number(request.cf.longitude)
    }
  }

  return new Response(JSON.stringify(resp, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });
}