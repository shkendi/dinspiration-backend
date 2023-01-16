import dotenv from 'dotenv'
dotenv.config()

export const secret = 'here is a secret only we know...'
// ! Export the correct URI from this file
export const MONGODB_URI = getMongoURI()

// ! This function will give me the correct URI for mongo db based on environemnt
function getMongoURI(): string {
  if (process.env.NODE_ENV === 'test') {
    return process.env.MONGODB_URI_TEST as string
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.MONGODB_URI as string
  }
  return process.env.MONGODB_URI_DEV as string
}

// ! Export our PORT
export const PORT = getPort()

function getPort(): number {
  if (process.env.NODE_ENV === 'production') {
    return Number(process.env.EXPRESS_PORT)
  }
  return Number(process.env.EXPRESS_PORT_LOCAL)
}
