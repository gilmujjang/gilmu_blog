import AnimatedButton from "@/components/button/AnimatedButton/AnimatedButton";

export default function Home() {
  return (
    <main>
      <h2>Welcome</h2>
      <AnimatedButton defaultContent="Hover this button" hoverContent="❗" style={{ margin: 24 }} />
    </main>
  );
}
