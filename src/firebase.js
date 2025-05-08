import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDuxd00tehH2xHfXwV-Vjr-WRXQS8fnk_o',
  authDomain: 'big-bears-bbq.firebaseapp.com',
  projectId: 'big-bears-bbq',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
