import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];

  const renderClients = () =>
    clients.map((client) => (
      <li key={client.id}>
        {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
        <Link
          href={{
            pathname: '/clients/[clientid]',
            query: {
              clientid: client.id,
            },
          }}
        >
          {client.name}
        </Link>
      </li>
    ));

  return (
    <div>
      <h1>The ClientsPage</h1>
      <ul>{renderClients()}</ul>
    </div>
  );
}

export default ClientsPage;
