import { useState } from "react";
import "./App.css";
function App() {
    const [daftarTugas, setDaftarTugas] = useState([]);
    const [inputTeks, setInputTeks] = useState("");
    function tambahTugas(teksBaru) {
        const tugasBaru = {
            teks: teksBaru,
            selesai: false,
        };
        return setDaftarTugas([...daftarTugas, tugasBaru]);
        setInputTeks("");
    }
    function handleChange(e) {
        setInputTeks(e.target.value);
    }
    return (<>
      <div>
        <h1>To Do List TypeCsript</h1>
      </div>
      <div>
        <input type="text" value={inputTeks} onChange={(e) => setInputTeks(e.target.value)} placeholder="Input Tugas"/>
        <button type="button" onClick={(e) => {
            e.stopPropagation;
            tambahTugas(inputTeks);
        }}>
          tambah
        </button>
      </div>
      <div>
        {daftarTugas.map((item, index) => (<li key={index}>{item.teks}</li>))}
      </div>
    </>);
}
export default App;
