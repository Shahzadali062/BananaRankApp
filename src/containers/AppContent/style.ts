/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal:20,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 15,
    fontSize:12,
    height:38,
    color:'black' 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  highlight: {
    backgroundColor: '#d1e7dd',
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'black'
  },
  name: {
    flex: 1,
    fontSize: 16,
    color:'black'
  },
  bananas: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'gray'
  },

  buttonView:
  {
    borderRadius:12,
    overflow:"hidden",
  }
});

export default styles;
