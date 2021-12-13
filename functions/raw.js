export async function onRequest({ request }) {
  const resp = {
    ip: request.headers.get('CF-Connecting-IP'),
    asn: request.cf.asn,
    asOrg: request.cf.asOrganization,
    coordinates: {
      latitude: request.cf.latitude,
      longitude: request.cf.longitude
    }
  }

  return new Response(JSON.stringify(resp, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });
}