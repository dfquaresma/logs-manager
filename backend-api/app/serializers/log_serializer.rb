class LogSerializer < ActiveModel::Serializer
  attributes :id, :dia, :hora, :contexto, :tipo, :mensagem
end
