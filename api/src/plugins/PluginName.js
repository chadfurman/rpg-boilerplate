export default function PluginName (builder) {

  builder.hook('GraphQLObjectType:fields',
    (
      fields,
      { extend, getTypeByName },
      context
    ) => {
      const { scope: { isMutationPayload }, GraphQLObjectType} = context
      if (!isMutationPayload) {
        return fields 
      }
      const String = getTypeByName('String')

      return extend(fields, {
        anExtraFieldOnMutations: {
          type: String,
          resolve: () => "An extra field!"
        },
      })
    }
  )
}
