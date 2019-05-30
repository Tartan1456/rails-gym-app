module Api
  class WorkoutsController < ActionController::API
    def show
      render json: workout_day_json(WorkoutDay.find_by(id: id_params));
    end

    private

    def id_params
      params.require(:id);
    end

    def workout_day_json(workout_day)
      {
        id: workout_day.id,
        date: workout_day.date,
        muscleSet: workout_day.muscleset,
        # exercises: exercises(workout_day)
      }
    end

    def exercises(workout_day)
      workout_day.exercises.map do |exercise|
        {
          exerciseName: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight,
        }
      end
    end
  end
end
