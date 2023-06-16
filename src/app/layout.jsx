import Provider from "@/components/Provider";
import "@/styles/globals.css";

export const metadata = {
  title: "Listed-board.",
  description: "Listed board Login & Signup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
