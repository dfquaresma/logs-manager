class LogsController < ApplicationController
  before_action :set_log, only: [:show, :edit, :update, :destroy]

  def index
    @logs = Log.all
    render json: @logs
  end

  def show
    render json: @log
  end

  def new
    @log = Log.new
  end

  def create
    @log = Log.new(log_params)

    if @log.save
      render json: @log, status: :created, location: @log
    else
      render json: @log.errors, status: :unprocessable_entity
    end
  end

  def update
    if @log.update(log_params)
      render json: @log
    else
      render json: @log.erros, status: :unprocessable_entity
    end
  end

  def destroy
    @log.destroy
  end

  private

    def set_log
      @log = Log.find(params[:id])
    end

    def log_params
      params.require(:log).permit!
    end


end
