import AnimatedButton from "@/components/button/AnimatedButton/AnimatedButton";
import { KeyframeComponent } from "@/components/framer/KeyframeComponent";

export default function Home() {
  return (
    <main>
      <h2>Welcome</h2>
      <section style={{ display: 'flex' }}>
        <AnimatedButton defaultContent="Hover this button" hoverContent="❗" style={{ margin: 24 }} />
        <KeyframeComponent />
      </section>
    </main>
  );
}
