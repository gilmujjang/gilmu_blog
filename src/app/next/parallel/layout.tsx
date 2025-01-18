
export default function Layout({
  children,
  team,
  analytics
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div style={{ margin: 20 }}>
      {children}
      <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
        {team}
        {analytics}
      </div>
    </div>
  );
}
