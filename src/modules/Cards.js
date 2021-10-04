import axios from 'axios'
import errorHandler from './ErrorHandler'
import store from '../state/store/configureStore'
import { getHeaders } from './Authentication'

const headers = getHeaders()

const Sections = {
  async create(newCard) {
    try {
      await axios.post(
        `/cards/${newCard.id}`,
        { card: newCard },
        { headers: headers }
      )
      store.dispatch({ type: 'SET_SUCCESS', payload: 'Card has been created' })
    } catch (error) {
      errorHandler(error)
    }
  },
}

export default Sections