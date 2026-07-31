import { useState } from "react";
import "./App.css";

function App() {
  interface Tugas {
    teks: string;
    selesai: boolean;
  }

  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>([]);
  const [inputTeks, setInputTeks] = useState<string>("");

  function tambahTugas(teksBaru: string): void {
    const teksTerbersih = teksBaru.trim();

    if (teksTerbersih === "") return;

    const tugasBaru: Tugas = {
      teks: teksTerbersih,
      selesai: false,
    };

    setDaftarTugas([...daftarTugas, tugasBaru]);
    setInputTeks("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputTeks(e.target.value);
  }

  return (
    <>
      <div>
        <h1>To Do List TypeCsript</h1>
      </div>
      <div>
        <input
          type="text"
          value={inputTeks}
          onChange={handleChange}
          placeholder="Input Tugas"
        />
        <button type="button" onClick={() => tambahTugas(inputTeks)}>
          tambah
        </button>
      </div>
      <div>
        {daftarTugas.map((item, index) => (
          <li key={index}>{item.teks}</li>
        ))}
      </div>
    </>
  );
}

export default App;
