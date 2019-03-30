class MetricsController < ApplicationController
  before_action :ord_log, only: [:show]
  before_action :set_log, only: [:index]

  def index
    render json: @logs
  end

  # ter uma API REST para capturar métricas de logs por contexto
  # média de mensagens por hora
  # maior numero de mensagens em uma hora
  # menor numero de mensagens
  def show
    if @logs.size == 0
      media, max_numb_msg_h, min_numb_msg_h = 0, 0, 0

    else
      @list, index, log_hour = [0], 0, @logs.first.hora.hour
      @logs.each do |log|
        unless log_hour != log.hora.hour
          @list[index] += 1
        else
          index += 1
          @list.push(1)
          log_hour = log.hora.hour
        end
      end
      soma_total, num_horas = @list.sum, @list.size
      media = soma_total.to_f / num_horas
      max_numb_msg_h, min_numb_msg_h = @list.max, @list.min
    end

    @metric = Metric.new( media_msg:media, maior_numb:max_numb_msg_h, menor_numb:min_numb_msg_h )
    render json: @metric

  end

  private
    # set @log only with logs of the desired context
    def set_log
      context = params["contexto"]
      @logs = []
      Log.all.each do |log|
        if log.contexto.eql? context
          @logs.push(log)
        end
      end
    end

    # ord the @logs by hour and minute
    def ord_log
      set_log
      @logs = @logs.sort_by { |log| [ log.hora.hour, log.hora.min ] }
    end

end
