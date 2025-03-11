import { ToastContainer } from 'react-toastify';

export default function Layout() {
    return (
        <>
            <header>Header</header>
            <main className='flex flex-row gap-2'>
                <button
                    className='btn btn-info'
                    onClick={() => {
                        const root = document.getElementById('root');
                        root?.classList.remove('bg-mortal', 'bg-vampire', 'bg-mage', 'bg-werewolf', 'bg-hunter');
                        root?.classList.add('bg-mortal');
                    }}>
                    Set Mortal
                </button>
                <button
                    className='btn btn-error'
                    onClick={() => {
                        const root = document.getElementById('root');
                        root?.classList.remove('bg-mortal', 'bg-vampire', 'bg-mage', 'bg-werewolf', 'bg-hunter');
                        root?.classList.add('bg-vampire');
                    }}>
                    Set Vampire
                </button>
                <button
                    className='btn btn-primary'
                    onClick={() => {
                        const root = document.getElementById('root');
                        root?.classList.remove('bg-mortal', 'bg-vampire', 'bg-mage', 'bg-werewolf', 'bg-hunter');
                        root?.classList.add('bg-mage');
                    }}>
                    Set Mage
                </button>
                <button
                    className='btn btn-warning'
                    onClick={() => {
                        const root = document.getElementById('root');
                        root?.classList.remove('bg-mortal', 'bg-vampire', 'bg-mage', 'bg-werewolf', 'bg-hunter');
                        root?.classList.add('bg-werewolf');
                    }}>
                    Set Werewolf
                </button>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        const root = document.getElementById('root');
                        root?.classList.remove('bg-mortal', 'bg-vampire', 'bg-mage', 'bg-werewolf', 'bg-hunter');
                        root?.classList.add('bg-hunter');
                    }}>
                    Set Hunter
                </button>
                <label className='flex cursor-pointer gap-2'>
                    <span className='bi-sun' />
                    <input type='checkbox' value='dark' className='toggle theme-controller' />
                    <span className='bi-moon' />
                </label>
            </main>
            <footer>Footer</footer>
            <ToastContainer stacked position='bottom-center' autoClose={5000} theme='colored' />
        </>
    );
}
