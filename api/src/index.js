import express from 'express'
import postgraphile from 'postgraphile'
// import PluginName from './plugins/PluginName'

// const plugins = [
//   PluginName
// ]

const app = express()
const pgConnectionString = process.env.DB_URI
const pgSchemas = process.env.POSTGRAPHILE_SCHEMAS.split(',')
const pgOptions = JSON.parse(process.env.POSTGRAPHILE_OPTIONS)
// pgOptions.appendPlugins = plugins

app.use(postgraphile(pgConnectionString, pgSchemas, pgOptions))


app.listen(3000, '0.0.0.0', function () {
  console.info('NODE_ENV: ' + process.env.NODE_ENV)
  console.info('Postgraphile API started.\n')
})
