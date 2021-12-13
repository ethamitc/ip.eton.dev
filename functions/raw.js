export async function onRequest({ request }) {
  const resp = {
    ip: request.headers.get('CF-Connecting-IP'),
    asn: request.cf.asn,
    asOrg: request.cf.asOrganization,
    location: `${request.cf.city}, ${request.cf.region}`
  }

  return new Response(JSON.stringify(resp, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });
}