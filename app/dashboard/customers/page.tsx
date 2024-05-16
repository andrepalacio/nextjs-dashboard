import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Customers() {
  const customers = await fetchCustomers();

  return (
    <div>
      <h1 className='text-3xl bold'>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <a href={`/customers/${customer.id}`}>{customer.name}</a>
          </li>
        ))}
      </ul>
    </div>
    // <p>{Object.keys(customers)}</p>
  );
}
