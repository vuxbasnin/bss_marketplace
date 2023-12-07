# base_full_stack_renm
* A project base use ReactJs, Express, NodeJs, MongoDB
* Server port default is 5000
* limit client request to server under 30MB
* Connect to atlas MongoDB : mongodb+srv://admin:[password]@nin.ylnosac.mongodb.net/?retryWrites=true&w=majority
  Change password to your password
* Saga: the action latest will handle and all actions before will cancel
* Flow:
  Action from user => redux saga => call API => reducers => update store => update view
