import "./globals.css";

export const metadata = {
  title: "Telegram Mini App",
  description: "Tasks, rewards, points and referrals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
