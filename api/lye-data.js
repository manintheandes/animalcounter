export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://last-year-energies.vercel.app/api/get-data?key=lye_data'
    );
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch LYE data' });
  }
}
