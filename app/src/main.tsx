import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Projects from './pages/Projects.tsx'
import Music from './pages/spotify/index.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/projects",
    element: <Projects/>
  },
  {
    path:"/music",
    element: <Music/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  // </React.StrictMode>,
)
