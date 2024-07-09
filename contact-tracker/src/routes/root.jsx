//This Outlet tells the root route where to render its child routes
//Using Link from react-router-dom , our client side routing allows us to update URL without requesting another document
//If we don't use Link then our client side will be doing a full document request for next URL
import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../contacts";

//gets the contacts
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

//Creates the contact
export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        {/* Inside this div component we want to render our child routes */}
        <Outlet /> {/* Just write <Outlet/> here to render child routes */}
      </div>
    </>
  );
}
