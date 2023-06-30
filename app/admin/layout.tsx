import AdminNavBar from "./components/AdminNavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminNavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
