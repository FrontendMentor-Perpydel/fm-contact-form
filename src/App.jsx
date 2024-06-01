import FormComponent from './components/FormComponent';
import ThemeController from './components/ThemeController';

function App() {
  return (
    <div>
      <ThemeController />
      <div className='flex w-full justify-center items-center'>
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
