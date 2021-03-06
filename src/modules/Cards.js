import axios from 'axios'
import errorHandler from './ErrorHandler'
import store from '../state/store/configureStore'
import { getHeaders } from './Authentication'

const headers = getHeaders()

const Sections = {
  async create(newCard) {
    try {
      await axios.post('/cards', { card: newCard }, { headers: headers })
      store.dispatch({ type: 'SET_SUCCESS', payload: 'Card has been created' })
      return 'success'
    } catch (error) {
      errorHandler(error)
      return 'error'
    }
  },
  async update(updatedCard) {
    try {
      await axios.put(
        `/cards/${updatedCard.id}`,
        { card: updatedCard },
        { headers: headers }
      )
      store.dispatch({ type: 'SET_SUCCESS', payload: 'Card has been updated' })
    } catch (error) {
      errorHandler(error)
    }
  },
}

export default Sections
