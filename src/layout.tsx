import { ToastContainer } from 'react-toastify';
import { ChangeBG } from './lib/Utilities';
import { TemplateValues } from './types/Template';

export default function Layout() {
    return (
        <>
            <header>Header</header>
            <main className='flex flex-row items-center gap-2'>
                <div className='join'>
                    {TemplateValues.map((template) => (
                        <button key={`bgbutton-${template}`} className='btn join-item capitalize btn-ghost btn-sm' onClick={() => ChangeBG(template)}>
                            Set {template}
                        </button>
                    ))}
                </div>
                <label className='flex cursor-pointer gap-2'>
                    <span className='bi-sun' />
                    <input type='checkbox' value='dark' className='theme-controller toggle' />
                    <span className='bi-moon' />
                </label>
            </main>
            <footer>Footer</footer>
            <ToastContainer stacked position='bottom-center' autoClose={5000} theme='colored' />
        </>
    );
}
