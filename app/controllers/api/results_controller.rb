module Api
  class ResultsController < ApplicationController
    before_action :set_result, only: [:show, :edit, :update, :destroy]
    skip_before_action :verify_authenticity_token

    # GET /results
    # GET /results.json
    def index
      @results = Result.all
    end

    # GET /results/1
    # GET /results/1.json
    def show
    end

    # GET /results/new
    def new
      @result = Result.new
    end

    # GET /results/1/edit
    def edit
    end

    # POST /results
    # POST /results.json
    def create
      @result = Result.find_or_create_by(target_id: result_params[:target_id]) do |result|
        result.date = result_params[:date]
        result.complete = result_params[:complete]
        result.passed = result_params[:passed]
        result.save
      end

      respond_to do |format|
        if @result.save
          format.json { render json: {}, status: 200 }
        else
          format.json { render json: @result.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /results/1
    # PATCH/PUT /results/1.json
    def update
      respond_to do |format|
        if @result.update(result_params)
          format.html { redirect_to @result, notice: 'Result was successfully updated.' }
          format.json { render :show, status: :ok, location: @result }
        else
          format.html { render :edit }
          format.json { render json: @result.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /results/1
    # DELETE /results/1.json
    def destroy
      @result.destroy
      respond_to do |format|
        format.html { redirect_to results_url, notice: 'Result was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_result
        @result = Result.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def result_params
        params.require(:result).permit(:complete, :target_id, :date, :passed)
      end
  end
end
