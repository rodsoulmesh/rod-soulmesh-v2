import { useState } from "react";

type Language = "en" | "pl" | "ru" | "es";

export default function App() {
  const [posts, setPosts] = useState<{ id: number; content: string }[]>([]);
  const [newPost, setNewPost] = useState("");
  const [lang, setLang] = useState<Language>("en");

  const translations: Record<Language, any> = {
    en: {
      title: "Rod-SoulMesh",
      subtitle: "A spiritual portal for consciousness, ceremonies, and the power of our talents.",
      placeholder: "Share your thoughts, vision, experience...",
      button: "Post",
      footer: "© 2025 Rod-SoulMesh.net – United through spirit and nature ✨",
    },
    pl: {
      title: "Rod-SoulMesh",
      subtitle: "Portal duchowości, połączenia, witchcraftu i słowiańskiej Mocy.",
      placeholder: "Podziel się przemyśleniami, wizją, doświadczeniem...",
      button: "Zamieść wpis",
      footer: "© 2025 Rod-SoulMesh.net – Połączeni przez ducha i naturę ✨",
    },
    ru: {
      title: "Rod-SoulMesh",
      subtitle: "Духовный портал связи, ведьмовства и славянской силы.",
      placeholder: "Поделитесь мыслями, видением, опытом...",
      button: "Опубликовать",
      footer: "© 2025 Rod-SoulMesh.net – Связаны духом и природой ✨",
    },
    es: {
      title: "Rod-SoulMesh",
      subtitle: "Portal espiritual de conexión, magia ancestral y poder eslavo.",
      placeholder: "Comparte tus pensamientos, visión, experiencia...",
      button: "Publicar",
      footer: "© 2025 Rod-SoulMesh.net – Unidos por el espíritu y la naturaleza ✨",
    },
  };

  const t = translations[lang];

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([{ content: newPost, id: Date.now() }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      backgroundImage: 'url("https://images.unsplash.com/photo-1581322333059-3ba9f20c874e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#e0fce0',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ alignSelf: 'flex-end', marginBottom: '1rem' }}>
        <select value={lang} onChange={(e) => setLang(e.target.value as Language)} style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
          <option value="en">English</option>
          <option value="pl">Polski</option>
          <option value="ru">Русский</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <img src="https://i.imgur.com/ZfbYkV4.png" alt="Othala Rune" style={{ height: '60px' }} />
        <h1 style={{
          fontSize: '3rem',
          background: 'linear-gradient(90deg, #00FF7F, #8A2BE2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          textShadow: '0 0 12px #7CFC00'
        }}>{t.title}</h1>
        <img src="https://i.imgur.com/XAkR84H.png" alt="Raido Rune" style={{ height: '60px' }} />
      </div>

      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        fontSize: '1.25rem',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '1rem 1.5rem',
        borderRadius: '1rem',
        marginBottom: '2rem'
      }}>{t.subtitle}</p>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'rgba(20,83,45,0.85)',
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        <textarea
          placeholder={t.placeholder}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: 'none', resize: 'vertical', minHeight: '100px' }}
        />
        <button
          onClick={addPost}
          style={{
            width: '100%',
            backgroundColor: '#22c55e',
            color: '#fff',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          {t.button}
        </button>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: 'rgba(6,78,59,0.85)',
              padding: '1rem',
              borderRadius: '1rem',
              boxShadow: '0 0 6px rgba(0,0,0,0.3)'
            }}
          >
            <p>{post.content}</p>
          </div>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        color: '#94a3b8',
        marginTop: '4rem',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        fontSize: '0.9rem'
      }}>
        {t.footer}
      </footer>
    </div>
  );
}
