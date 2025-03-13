import { ToastContainer } from 'react-toastify';
import AttributeGauge from './components/AttributeGauge';

export default function Layout() {
    return (
        <>
            <header>Header</header>
            <main className='flex flex-row items-center gap-2'>
                {/* <div className='join'>
                    {TemplateValues.map((template) => (
                        <button key={`bgbutton-${template}`} className='btn join-item capitalize btn-ghost btn-sm' onClick={() => ChangeBG(template)}>
                            Set {template}
                        </button>
                    ))}
                </div> */}
                <label className='flex cursor-pointer gap-2'>
                    <span className='bi-sun' />
                    <input type='checkbox' value='dark' className='theme-controller toggle' />
                    <span className='bi-moon' />
                </label>
                <div>
                    <AttributeGauge min={1} max={5} value={1} temp={5} onChange={(value) => console.log(value)} />
                </div>
            </main>
            <footer>Footer</footer>
            <ToastContainer stacked position='bottom-center' autoClose={5000} theme='colored' />
        </>
    );
}
