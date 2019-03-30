class Log < ApplicationRecord
    validates_presence_of :dia, :hora, :contexto, :tipo, :mensagem
end
